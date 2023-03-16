import React from 'react';
import certificate1 from '../Certificate/certificate1.pdf';
import certificate2 from '../Certificate/certificate2.pdf';
import certificate3 from '../Certificate/certificate3.pdf';
import certificate4 from '../Certificate/certificate4.pdf';
import '../Styles/Certificate.css'

export const Certificate = () => {
    return (
        <div className='ContainerC'>
            <div className='ContainerCertificate'>
                <object data={certificate1} type="application/pdf" width="300px" height="200px">
                    <p>Tu navegador no soporta PDFs. Puedes descargar el archivo aquí: <a href={certificate1}>Descargar PDF</a>.</p>
                </object>
                <object data={certificate2} type="application/pdf" width="300px" height="200px">
                    <p>Tu navegador no soporta PDFs. Puedes descargar el archivo aquí: <a href={certificate2}>Descargar PDF</a>.</p>
                </object>
                <object data={certificate3} type="application/pdf" width="300px" height="200px">
                    <p>Tu navegador no soporta PDFs. Puedes descargar el archivo aquí: <a href={certificate3}>Descargar PDF</a>.</p>
                </object>
                <object data={certificate4} type="application/pdf" width="300px" height="200px">
                    <p>Tu navegador no soporta PDFs. Puedes descargar el archivo aquí: <a href={certificate4}>Descargar PDF</a>.</p>
                </object>
            </div>
        </div>
    )
}
