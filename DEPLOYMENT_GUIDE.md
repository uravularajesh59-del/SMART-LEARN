# How to Deploy SMART-LEARN to the Web

This guide will help you put your website on the internet using **GitHub** and **Render** (free hosting).

## Prerequisites
1.  **GitHub Account**: You need a GitHub account.
2.  **Render Account**: You will need to sign up at [Render.com](https://render.com) (you can log in with GitHub).

## Step 1: Ensure Code is on GitHub
Push your latest code to your GitHub repository.
1.  Open your terminal/command prompt.
2.  Run:
    ```bash
    git add .
    git commit -m "Prepared for deployment"
    git push origin main
    ```

## Step 2: Create a Web Service on Render
1.  Go to the [Render Dashboard](https://dashboard.render.com/).
2.  Click **New +** and select **Web Service**.
3.  Connect your GitHub account if you haven't already.
4.  Find your `SMART-LEARN` (or equivalent) repository and click **Connect**.

## Step 3: Configure the Service
Render might detect the `render.yaml` file and auto-configure. If not, fill in these details manually:

-   **Name**: `smart-learn` (or any unique name you like)
-   **Region**: Closest to you (e.g., Singapore, Oregon).
-   **Branch**: `main` (or `master`).
-   **Root Directory**: `StudentTechSystem`
    -   *Crucial Step*: We only want to deploy the backend folder.
-   **Runtime**: `Python 3`
-   **Build Command**: `pip install -r requirements.txt`
-   **Start Command**: `gunicorn app:app`
-   **Plan**: `Free`

## Step 4: Environment Variables (Optional but Recommended)
For better security, scroll down to the "Environment Variables" section while creating the service:
1.  **Key**: `SECRET_KEY`
2.  **Value**: (Type a random long string of characters here, e.g., `s3cr3t_k3y_12345!`)
3.  **Key**: `PYTHON_VERSION`
4.  **Value**: `3.11.0` (or `3.12.0`)

## Step 5: Deploy
1.  Click **Create Web Service**.
2.  Render will start building your app. You will see logs scrolling.
3.  Once finished, you will see a green "Live" badge and a URL at the top (e.g., `https://smart-learn.onrender.com`).
4.  **Click that URL** to view your live website!

## Important Note on Database
This configuration uses **SQLite**, which is a file-based database.
-   **Warning**: On Render's Free Tier, the file system is *ephemeral*. This means **every time your website restarts or you deploy new code, the database will be reset (all registered students will be deleted).**
-   For a persistent database, you would need to add a "PostgreSQL" service on Render and link it using the `DATABASE_URL` environment variable.

## Troubleshooting
-   **"Build Failed"**: Check the logs. Did `pip install` fail?
-   **"Internal Server Error"**: unexpected crash. Check "Logs" tab in Render for the Python error trace.
