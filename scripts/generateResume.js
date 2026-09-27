import process from 'node:process';
import PDFDocument from 'pdfkit';
import fs from 'fs';

function createResume(outputPath) {
    const doc = new PDFDocument({
        size: 'A4',
        margins: { top: 32, bottom: 32, left: 42, right: 42 },
        autoFirstPage: true,
        bufferPages: true
    });

    const writeStream = fs.createWriteStream(outputPath);
    doc.pipe(writeStream);

    const left = 42;
    const right = 595.28 - 42;

    const drawSectionDivider = () => {
        doc.moveDown(0.18);
        const y = doc.y;
        doc.lineWidth(0.85)
            .strokeColor('#111827')
            .moveTo(left, y)
            .lineTo(right, y)
            .stroke();
        doc.moveDown(0.28);
    };

    // --- Header ---
    doc.font('Times-Bold').fontSize(14).text('THOTA LAKSHMI PRASANNA', { align: 'center' });
    doc.moveDown(0.15);
    doc.font('Times-Roman').fontSize(9).text(
        '+91 6304833716 | thotalakshmiprasanna1408@gmail.com | Sathupally, Khammam, Telangana, India',
        { align: 'center' }
    );
    doc.text(
        'www.linkedin.com/in/lakshmi-prasanna-thota-88a28740 | https://github.com/Lakshmi-14082005',
        { align: 'center' }
    );

    drawSectionDivider();

    // --- Professional Summary ---
    doc.font('Times-Bold').fontSize(10).text('PROFESSIONAL SUMMARY');
    doc.moveDown(0.18);
    doc.font('Times-Roman').fontSize(8.8).text(
        'Enthusiastic and detail-oriented Computer Science Engineering student aspiring to kickstart a career as a Full-Stack Web Developer. Eager to leverage foundational skills in Python, Java, and front-end technologies to build scalable, user-friendly digital solutions. A proactive learner ready to contribute to a dynamic development team and drive impactful technical innovations.',
        { align: 'left', lineGap: 1.2 }
    );

    drawSectionDivider();

    // --- Education ---
    doc.font('Times-Bold').fontSize(10).text('EDUCATION');
    doc.moveDown(0.25);

    // Education Table with 3 rows
    const drawEduRow = (year, text, grade, isLast = false) => {
        const startY = doc.y;

        // Year col
        doc.font('Times-Bold').fontSize(9.2).text(year, left + 25, startY, { width: 90 });

        // Middle col
        doc.font('Times-Roman').fontSize(8.8).text(text, left + 125, startY, { width: 250, lineGap: 1.2 });
        const midEndY = doc.y;

        // Grade col
        doc.font('Times-Roman').fontSize(8.8).text(grade, left + 390, startY, { width: 85, align: 'right' });
        const gradeEndY = doc.y;

        const rowHeight = Math.max(midEndY, gradeEndY, startY + 18) - startY;
        const lineY = startY + rowHeight + 3;

        if (!isLast) {
            doc.lineWidth(0.5)
                .strokeColor('#cccccc')
                .moveTo(left + 20, lineY)
                .lineTo(right - 20, lineY)
                .stroke();
            doc.y = lineY + 4;
        } else {
            doc.y = lineY + 3;
        }
    };

    drawEduRow(
        '2023 \u2013 2027',
        'Mother Teresa Institute of Science and\nTechnology, JNTUH \u2014 B.Tech (CSE)',
        '8.41 CGPA'
    );
    drawEduRow(
        '2020 \u2013 2022',
        'Govt Girls Jr College, Sathupally \u2014\nIntermediate (MPC)',
        '87.3%'
    );
    drawEduRow(
        '2020',
        'Govt Girls High School, Sathupally \u2014\nSSC',
        '9.8 CGPA',
        true
    );

    doc.moveDown(0.2);
    doc.font('Times-Italic').fontSize(9.2).text('Language Known', left + 20);
    doc.moveDown(0.1);
    doc.font('Times-Roman').fontSize(8.8).text('\u2022 Telugu | English | Hindi', left + 40);

    drawSectionDivider();

    // --- Technical Skills ---
    doc.font('Times-Bold').fontSize(10).text('TECHNICAL SKILLS');
    doc.moveDown(0.18);
    doc.font('Times-Roman').fontSize(8.8).text(
        'Python \u2022 Java \u2022 JavaScript \u2022 React \u2022 HTML5 \u2022 CSS3 \u2022 Tailwind CSS \u2022 Git/GitHub \u2022 MS Office',
        { align: 'left', lineGap: 1.2 }
    );

    drawSectionDivider();

    // --- Strengths ---
    doc.font('Times-Bold').fontSize(10).text('STRENGTHS');
    doc.moveDown(0.18);
    doc.font('Times-Roman').fontSize(8.8).text(
        'Problem-Solving \u2022 Communication \u2022 Leadership \u2022 Collaboration \u2022 Proactive Learning',
        { align: 'left', lineGap: 1.2 }
    );

    drawSectionDivider();

    // --- Projects ---
    doc.font('Times-Bold').fontSize(10).text('PROJECTS');
    doc.moveDown(0.22);

    // Mist Clubs
    doc.font('Times-Bold').fontSize(9).text(
        'Mist Clubs \u2013 Student Activity Council Portal | React 19, TypeScript, Vite 6, Tailwind CSS v4, Motion, Lucide React'
    );
    doc.moveDown(0.1);
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Developed a responsive collegiate club network portal for student activities, competitions, registrations, events, notices, and achievements.',
        { indent: 14, lineGap: 1 }
    );
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Built club discovery, interactive event calendar, official circulars/gazette, online registrations with attendance-pass generation, and organizer dashboards.',
        { indent: 14, lineGap: 1 }
    );
    doc.moveDown(0.22);

    // LogicCode
    doc.font('Times-Bold').fontSize(9).text(
        'LogicCode \u2013 Aptitude & Logical Reasoning Mastery Platform | React 19, TypeScript, Vite, Tailwind CSS v4, Motion, Lucide React, Node.js, Express'
    );
    doc.moveDown(0.1);
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Built a distraction-free platform for quantitative aptitude, logical reasoning, formula recall, and timed problem-solving. Developed timed formula tests, tiered Basic/Medium/Hard practice labs, MCQ/fill-in-the-blank workflows, and performance analytics.',
        { indent: 14, lineGap: 1 }
    );
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Engineered state management and screen routing architecture in App.tsx; implemented authentication, theme support, and Motion animations.',
        { indent: 14, lineGap: 1 }
    );
    doc.moveDown(0.22);

    // My Profile
    doc.font('Times-Bold').fontSize(9).text(
        'My Profile \u2013 Developer Portfolio Platform | React 19, TypeScript, Vite, Tailwind CSS v4, Motion, Lucide React Architected and developed a responsive single-page developer portfolio showcasing skills, projects, education, background, and contact channels.'
    );
    doc.moveDown(0.1);
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Designed modular components for project cards, dynamic skill tags, and portfolio sections.',
        { indent: 14, lineGap: 1 }
    );
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Integrated Lucide icons and Motion transitions for navigation, hover effects, and section animations.',
        { indent: 14, lineGap: 1 }
    );
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Implemented responsive layouts and dark/light theme support.',
        { indent: 14, lineGap: 1 }
    );
    doc.moveDown(0.22);

    // NoTo-website
    doc.font('Times-Bold').fontSize(9).text(
        'NoTo-website \u2013 Student Material | HTML'
    );
    doc.moveDown(0.1);
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Created a simple, clean website focused on student needs and student-related content.',
        { indent: 14, lineGap: 1 }
    );
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Used HTML for structure and presentation.',
        { indent: 14, lineGap: 1 }
    );
    doc.moveDown(0.22);

    // Student_To_Do_app
    doc.font('Times-Bold').fontSize(9).text(
        'Student_To_Do_app | JavaScript'
    );
    doc.moveDown(0.1);
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Built a daily task-management application for adding and tracking a to-do list.',
        { indent: 14, lineGap: 1 }
    );
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Designed to help organize study-related tasks.',
        { indent: 14, lineGap: 1 }
    );
    doc.moveDown(0.22);

    // Calculator-app-with-React
    doc.font('Times-Bold').fontSize(9).text(
        'Calculator-app-with-React | React, JavaScript'
    );
    doc.moveDown(0.1);
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Built a web-based calculator with interactive UI components.',
        { indent: 14, lineGap: 1 }
    );
    doc.font('Times-Roman').fontSize(8.5).text(
        '\u2022 Created to practice React skills and math-task interaction',
        { indent: 14, lineGap: 1 }
    );

    doc.end();

    return new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
}

const outPath = process.argv[2] || 'public/Resume.pdf';
createResume(outPath)
    .then(() => console.log('Successfully created resume PDF at ' + outPath))
    .catch((err) => {
        console.error('Error creating PDF:', err);
        process.exit(1);
    });
