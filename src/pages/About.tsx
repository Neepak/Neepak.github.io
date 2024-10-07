import React from 'react'
import pdf from './resume2.pdf';
import { Document, Page } from 'react-pdf';

export const About: React.FC = () => {
    return (
        <div className='pdf'>
            <Document className={'PDFDocument'} file={pdf} >
                <Page className={'PDFPage'} pageNumber={1} />
            </Document>
        </div>
    )
}