# GDrive-Folder-By-Path
A Google App Script I made to copy and paste into projects where I want to find folders in my drive by a path rather than by id.

Usage is folderFinder("path","basePath","mkdir")

The path parameter is required and folders should be seperated by '/'
ex folderFinder("hello/world/foo/bar")

The parameter basePath is where you put the ID of the folder where you want to start the folderFinder.
This parameter is not required and will be set to the root of your Google Drive by default unless you supply an alternate "root".
ex folderFinder("hello/world/foo/bar","gdrivefolderid")

The mkdir parameter is set to false by default, but if set to true, the function folderFinder will make folders if it can not find the folder in the specified path. 
This is useful in automatically creating paths that don't exist. For my job, I use this to make folders based on year and month to ingest reports into so it saves me having to make the folders manually every month. 
ex folderFinder("hello/world/foo/bar","gdrivefolderid", true)

Upon successful execution of the folderFinder function, it will return the folder ID of the last folder in the supplied path.