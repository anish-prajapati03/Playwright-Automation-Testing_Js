# Playwright Automation Testing – OrangeHRM

## 📌 Project Overview

This repository contains my QA Automation Testing practice and project work using **Playwright with JavaScript**. I am automating test scenarios on the OrangeHRM demo application to improve my skills in web automation, test case design, assertions, and test reporting.

The project focuses on validating important application functionalities through automated test scripts.

## 🌐 Application Under Test

- **Application:** OrangeHRM Demo
- **Website:** https://opensource-demo.orangehrmlive.com/
- **Testing Type:** Web UI Automation Testing
- **Automation Tool:** Playwright
- **Programming Language:** JavaScript

## 🛠️ Tools & Technologies

- Playwright
- JavaScript (ES6+)
- Node.js
- npm
- Visual Studio Code
- Git & GitHub

## 🎯 Project Objectives

- Automate login and logout functionality.
- Validate positive and negative login scenarios.
- Verify page titles, elements, and navigation.
- Practice locators and web element interactions.
- Implement assertions using Playwright.
- Validate form fields and application behavior.
- Generate and analyze Playwright HTML test reports.
- Follow a structured approach to automation testing.

## 🧪 Test Scenarios

| Test Scenario | Description |
|---|---|
| Login with valid credentials | Verify successful login |
| Login with invalid credentials | Verify appropriate error message |
| Login with empty fields | Validate mandatory field behavior |
| Verify dashboard | Check successful navigation to dashboard |
| Logout | Verify the user can log out successfully |
| Element visibility | Verify important UI elements are visible |
| Navigation | Verify navigation between available modules |

*Note: These are planned or example scenarios. Actual implementation and results depend on the test scripts added to the repository.*

## 📂 Project Structure

```text
Playwright-Automation-Testing/
├── tests/
│   └── login.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/Playwright-Automation-Testing.git
```

### 2. Navigate to the project directory

```bash
cd Playwright-Automation-Testing
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

## ▶️ Execute Tests

Run all test cases:

```bash
npx playwright test
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

## 📊 Test Reports

Generate and view the HTML report after execution:

```bash
npx playwright show-report
```

The report helps review test execution status, passed tests, failed tests, and error details.

## 🔐 Environment Variables

Sensitive credentials and configuration values should be stored in a local `.env` file.

- Do not commit `.env` to GitHub.
- Keep `.env` in `.gitignore`.
- Use `.env.example` with placeholder values to document required variables.
- Never publish real usernames, passwords, or authentication tokens.

## 📚 Learning Outcomes

Through this project, I am practicing:

- Playwright test runner and assertions.
- Locators such as `getByRole()`, `getByText()`, and `locator()`.
- Browser and page handling.
- Positive and negative test scenarios.
- Test execution, debugging, and reporting.
- JavaScript-based automation framework fundamentals.
- Git and GitHub version control.

## 👨‍💻 Author

**Anish Prajapati**

Aspiring QA Engineer | Manual Testing | Automation Testing with Playwright | JavaScript | SQL

## ⚠️ Disclaimer

This project is created for educational and practice purposes using the publicly available OrangeHRM demo application. It is not affiliated with or endorsed by OrangeHRM.

## Command
npx playwright test OrangeHRM_URL.spec.js --headed           // run the test through file name 
npx playwright test -g "OrangeHRM_codegen" --headed         // Run the test through title
npx playwright codegen -o .\tests\PlaywrightCodeGen.spec.js    // create a separate file where codegen script automatic written.

