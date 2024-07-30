import React, { useEffect, useRef, useState } from 'react';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist/webpack';
import 'pdfjs-dist/web/pdf_viewer.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PDFViewer = () => {

    const navigation = useNavigate();
    const canvasRef = useRef(null);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [pageRendering, setPageRendering] = useState(false);
    const [pageNumPending, setPageNumPending] = useState(null);
    const [scale] = useState(0.8);

    const url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

    // Specify the workerSrc property
    useEffect(() => {
        GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/$/pdf.worker.min.js`;
    }, []);

    useEffect(() => {
        const loadPdf = async () => {
            const loadingTask = getDocument(url);
            const pdf = await loadingTask.promise;
            setPdfDoc(pdf);
        };

        loadPdf();
    }, [url]);

    useEffect(() => {
        const renderPage = async (num) => {
            setPageRendering(true);
            const page = await pdfDoc.getPage(num);
            const viewport = page.getViewport({ scale });
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport,
            };
            const renderTask = page.render(renderContext);

            await renderTask.promise;
            setPageRendering(false);
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                setPageNumPending(null);
            }
        };

        if (pdfDoc) {
            renderPage(pageNum);
        }
    }, [pdfDoc, pageNum, scale]);

    const onPrevPage = () => {
        if (pageNum <= 1) {
            return;
        }
        setPageNum(pageNum - 1);
    };

    const onNextPage = () => {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        setPageNum(pageNum + 1);
    };

    return (
        <div className="sidebar_mar">
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                <h1 className='pdf_head'>PDF.js Previous/Next example</h1>
                <Button className='previous_button' onClick={() => navigation(-1)}>Back</Button>
            </div>
            <p style={{ marginBottom: 10 }}>
                Please use{' '}
                <a href="https://mozilla.github.io/pdf.js/getting_started/#download" target='_blank'>
                    <i>official releases</i>
                </a>{' '}
                in production environments.
            </p>
            <div>
                <button onClick={onPrevPage} disabled={pageRendering}
                    className='previous_button'
                    style={{ marginRight: 10 }}>
                    Previous
                </button>
                <button onClick={onNextPage} disabled={pageRendering}
                    className='previous_button'
                >
                    Next
                </button>
                &nbsp; &nbsp;
                <span>
                    Page: {pageNum} / {pdfDoc ? pdfDoc.numPages : '--'}
                </span>
            </div>
            <canvas ref={canvasRef} id="the-canvas"></canvas>
        </div>
    );
};

export default PDFViewer;