function folderFinder(path, altRoot, mkdir) {

    //PATH CHECKER START
     if (!path){
       Logger.log("No path supplied! Aborting."); return
     }else{  
     var path = path.split('/');
     Logger.log("Path to use : "+path);
     Logger.log("Folders in path : "+path.length);
     }
    //PATCH CHECKER END
   
   
   
    //BASE PATH CHECKER START
    var errmsg = "Alternet root folder ID is invalid.";
    var bPath = DriveApp.getRootFolder;
    if (!altRoot){
     Logger.log("No base path provided! Defaulting to users drive");
     var bPath = DriveApp.getRootFolder().getId();
     Logger.log("Default Path = "+bPath);
    } else if (altRoot != null){
     try {
       DriveApp.getFolderById(altRoot);
     } catch {
       Logger.log("Invalid root folder ID provided. Aborting."); return errmsg
     }
     Logger.log("Alternate root ID is valid");
     bPath = altRoot;
     Logger.log("Alternate Path = "+bPath);
    }
    //BASE PATH CHECKER END
   
   
   
    //FOLDER FINDER START 
    for (var x = 0; x < path.length; x++) {
     Logger.log((x+1) + " checking for folder named "+path[x]);
     if (DriveApp.getFolderById(bPath).getFoldersByName(path[x]).hasNext() === true){
       Logger.log("Folder '"+path[x]+"' exists!");
       Logger.log(DriveApp.getFolderById(bPath).getFoldersByName(path[x]).next().getId());
       var nPath = DriveApp.getFolderById(bPath).getFoldersByName(path[x]).next().getId();
       bPath = nPath;
     } else if (mkdir === true) {
       Logger.log(path[x]+ " not found. Mkdir set to true, making folder");
       var nPath = DriveApp.getFolderById(bPath).createFolder(path[x]).getId();
       bPath = nPath;
     } else {
       Logger.log("Could not find folder '"+path[x]+"' and mkdir is either set to false or is unset")
       var errmsg = "Provided path did not work";
       return errmsg;
     }
    }
    //FOLDER FINDER END
    
     return bPath;
   
   
   }