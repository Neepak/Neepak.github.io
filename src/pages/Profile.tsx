import React from 'react'
import pdf from './process.pdf';
import { Document, Page } from 'react-pdf';

export const Profile: React.FC = () => {
    return (
        <div className='pdf'>
            <Document className={'PDFDocument'} file={pdf} >

                {Array.from(new Array(17)).map((_, i) => (
                    <Page className={'PDFPage'} key={i} pageNumber={i + 1} />
                ))}
            </Document>
        </div>
    )
}