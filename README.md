
# Resume Builder

## Live Demo
You can check out the live version of the app deployed on Vercel:  
**[Live Demo Link](https://cvly-tau.vercel.app/)**

---

## Overview

This project is a **Resume Builder Web Application** where users can input their details, customize their resume format, preview it, and finally download it as a PDF. The application allows the user to add personal information, education, work experience, skills, and projects in a structured format. It provides different resume layout formats for preview, and once the user is satisfied, they can download the resume in PDF format.

## Features

- **Personal Info Section:** Collects name, email, phone, LinkedIn, and GitHub.
- **Education Section:** Collects institution name, degree, and year of passing.
- **Work Experience Section:** Collects company name, role, duration, and achievements.
- **Skills Section:** A multi-select dropdown to add skills.
- **Projects Section:** Collects project title, description, and technologies used.
- **Preview Section:** Shows different formats for the resume and allows users to select one.
- **Resume Page:** Displays the final resume with the selected format and allows the user to download it as a PDF.
  
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/resume-builder.git
   cd resume-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## Project Structure

### 1. **`src/components/`**
   - **`Details.js`**: Contains all sections for collecting user details like Personal Info, Education, Work Experience, Skills, and Projects.
   - **`Header.js`**: Displays the header of the application (e.g., title, navigation).
   - **`Preview.js`**: Displays different formats for previewing the resume and allows users to select one.
   - **`Resume.js`**: Displays the final resume and allows the user to download it as a PDF.

### 2. **`src/context/`**
   - **`DetailsContext.js`**: Stores and provides user details across components.
   - **`FormatterContext.js`**: Manages the selected resume format for preview.

### 3. **`src/styles/`**
   - **`styles.css`**: Contains all the global and layout-specific styles for the application.

### 4. **`src/App.js`**: Main component that integrates all sections (header, details form, preview, and final resume).

---

## How it Works

1. **Details Form:** 
   - The `Details` component contains forms for each section (Personal Info, Education, Work Experience, Skills, and Projects).
   - Each section is inside an accordion component where the user can expand and fill in their details.
   - The form fields for each section include:
     - Personal Info: Name, Email, Phone, LinkedIn, GitHub.
     - Education: Institution, Degree, Year of Passing.
     - Work Experience: Company, Role, Duration, Achievements.
     - Skills: Multi-select dropdown for skills.
     - Projects: Title, Description, Technologies Used.

2. **Preview Section:** 
   - The `Preview.js` component displays multiple resume formats.
   - The user can select the format they prefer (e.g., `First Format`, `Second Format`, `Third Format`), and the resume sections will be displayed accordingly.
   - Once the user selects a format, the resume content is rendered in the chosen order.

3. **Final Resume Page:**
   - In the `Resume.js` component, the final resume is displayed based on the selected format.
   - The user can download the resume as a PDF by clicking the **Download** button.

## How to Use

1. **Input Details:**
   - Go to the **Details** section and fill out the forms for Personal Info, Education, Work Experience, Skills, and Projects.

2. **Preview Resume:**
   - Navigate to the **Preview** section and select the resume format you prefer.
   - You will see a preview of your resume in the selected format.

3. **Download Resume:**
   - After selecting the format and reviewing the preview, go to the **Resume** page.
   - Click the **Download** button to download your resume in PDF format.

## Deployment

The application is deployed on [Vercel](https://vercel.com/), and you can access the live version of the application here:

**[Live Demo Link](https://cvly-tau.vercel.app/)**

## Future Improvements

- Allow users to upload and customize resume templates.
- Add the ability to update resume sections directly.
- Implement more advanced PDF export options (e.g., custom styling, custom fonts).
- Integrate with LinkedIn or other platforms for automatic data import.

## Technologies Used

- **React**: For building the user interface.
- **Material UI**: For components and styling.
- **React Context**: For state management of user details and selected resume format.
- **html2pdf**: For converting the final resume into a downloadable PDF.
  
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
