import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Link, Paper, Typography } from '@mui/material';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from '../../pdf/CV.pdf';

import './pdf.css';

export default function Pdf({ download }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
  const file = pdf;
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <Paper
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          px: 2,
          py: 2,
        }}
      >
        <Typography
          color="secondary"
          component="h1"
          variant="h4"
          sx={{ textAlign: 'center' }}
        >
          Curriculum Vitae
        </Typography>
      </Paper>

      <div className="Example__container">
        <Link
          href="https://drive.google.com/file/d/15VdE7icWasndTEewKEcXkNr_zPnGryWK/view?usp=sharing"
          target="_blank"
        >
          <Button variant="text">
            <Typography color="secondary" component="h1" variant="h6">
              {download}
            </Typography>
          </Button>
        </Link>
        <div className="Example__container__document">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
