# Google App Script - Find folder in drive by path
 This is a google app script I originally made to help me automate workloads such as ingesting report data from emails into specific folders within my drive. It originally spanned across a few different functions, but I have since refined it/condensed it down to one function so I could easily copy and paste it into other scripts.  
 **Upon succesful execution the function will return the ID of the last folder in the specified path.**  

## Features & Usage
The function has three parameters you can pass to it with only one being required for successful execution.  
| Paramter | Description | Required? | Usage |
| ----------- | ----------- | ----------- | ----------- |
| path | Specify the path to use | Yes | STRING - Seperate folders in path using "/" - folderFinder("hello/world/foo/bar") |
| altRoot | Specify an alternate starting point | No | STRING - The ID of folder or shared drive - folderFinder("hello/world", "folder ID") |
| mkDir | Allow the function to make folders where it can't find ones | No | BOOLEAN - Either true or false but defaults to false - folderFinder("hello/world", "folder ID", true) |  
---
  
If you set <span style="color:gold">mkDir</span> to true, the function will create the folders in the path if they don't exist.  
Example output from Google App Script:  
<img src="https://maedae.s3.us-east-005.backblazeb2.com/gdriveex1.png" style="width:30rem">  
In this case, <span style="color:gold">mkDir</span> was set to **TRUE** and the folders/directory didn't exist in my drive, so the function created them for me.
