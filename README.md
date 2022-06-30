# comment-api
## How to run the app
  1. Clone the app.
  2. Use "npm install" command to download packages.
  3. "npm start" to run the app in localhost:8000.
 * Note .env file was added intentionally. 

## How to call api-
  1. Use any email in the req body and then call a localhost:8000/api/gettoken (post method) to register an email.
  2. After registering a JWT token is responsed back.
  3. Use this token in the Header and previously registered email in the body then call localhost:8000/api/creatcomment (put method) to post a comment.
  4. The Formate should be like this
  * Header 
      Key = token
      Value = Bearer eyJhbGcIsInR5cCIpXVCJ9.eyJlbWmNvbSIsNjU3NzQ3NH0.3F4mLVzZ5X2vIX5HyVi33k
  * Body 
         {
        "email": "example@gmail.com",
        "comments":{
            "comment": "first comment",
            "rating": 4
        }
    }
    
