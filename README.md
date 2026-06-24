# 📘 Playwright BDD Setup Guide

## ✅ Prerequisites

- Node.js installed (tested with v26.2.0)  
- A Microsoft account  
- Add your credentials in the `.env` file:
  ```
  MS_USERNAME=your-email
  MS_PASSWORD="your-password"
  ```

---

## 🚀 To Run Tests

1. Clone this repository  
2. Install dependencies:
   `npm install`

3. Generate BDD step files:
   `npx bddgen`

4. Run tests:
   `npx playwright test`

✅ Tests will run in **Microsoft Edge** by default  
⚠️ Make sure Edge is installed locally (Windows)

---

## ⚙️ Configuration Notes

- Using @playwright/test version:
  ^1.61.1

- Inside `.env`:
  If you change:
  BROWSER=chrome

  ✅ Tests will pass

---

## ✅ Working Fine with Older Version

1. Change Playwright version to:
   1.59.0

   ⚠️ Do NOT use ^

2. Run:
   `npx playwright test`

✅ Tests will pass for both **Chrome and Edge**

---

## 🔁 Steps to Reproduce Issue Again

1. Delete:
  ```
  .features-gen/
   node_modules/
   package-lock.json
   ```

3. Update version back to:
   ^1.61.1

4. Update `.env`:
   BROWSER=edge

5. Run:
  ```
   npm install
   npx bddgen
   npx playwright test
```

❌ Tests will fail again on **Edge**
