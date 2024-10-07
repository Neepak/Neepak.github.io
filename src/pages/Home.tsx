import React from 'react'
import pdf from './resume1.pdf';
import { Document, Page } from 'react-pdf';

export const Home: React.FC = () => {
    return (
        <div className='pdf'>
            <Document className={'PDFDocument'} file={pdf} >
                <Page className={'PDFPage'} pageNumber={1} />
            </Document>
        </div>
    )
}