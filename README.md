# Lou Geh Manufacturing Company Prototype

## Project Description
Lou Geh Manufacturing Company produces products, which are made up of many components. This prototype provides a system to manage product, component, and supplier data.

## Technologies Used
- **Backend**: Node.js (Express.js for REST API)
- **Database**: MySQL
- **Frontend**: Basic HTML, CSS, and JavaScript
- **Version Control**: Git and GitHub

## Setup Guide

### Prerequisites
1. **Node.js**: Install Node.js from [here](https://nodejs.org/).
2. **MySQL**: Install MySQL from [here](https://dev.mysql.com/downloads/).
3. **Git**: Install Git from [here](https://git-scm.com/downloads).

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/rennuin/Lou-Geh-Manufacturing-Company.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Lou-Geh-Manufacturing-Company
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your MySQL database. Use the provided `database.sql` in the `provisions` folder to set up your database schema.
5. Configure database connection in the `config/database.js` file with your MySQL credentials.

### Running the Application
1. To start the backend:
   ```bash
   npm start
   ```
2. Open the frontend in your browser (usually served on `http://localhost:3000`).

## Folder Structure


## ERD and DFD
- **ERD (Entity Relationship Diagram)**: [View ERD](https://drive.google.com/file/d/1TCFtDsrzosFKvU80zy598XJwStS2AGe1/view)
- **DFD (Data Flow Diagram)**: [View DFD](https://drive.google.com/file/d/1mUBjS9eQ6zXLGkAFLMq0CWStci1YtNKC/view)

