(async function(){

    // importing json files to javascript...
    const videoJsonResponse = await fetch("https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0");
    const videoJson = await videoJsonResponse.json();
    
    const posterJsonResponse = await fetch("https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346");
    const posterJson = await posterJsonResponse.json();

    // console.log(videoJson);
    // code for left card here.....
    let leftCard = $("<div>");
    leftCard.attr("class" , "left-card")
    $(".container").append(leftCard);

    let videoDetails = $("<div>");
    videoDetails.attr("class" , "video-details")
    leftCard.append(videoDetails);

    let videoPlaceholder = $("<div>");
    videoPlaceholder.attr("class","video-placeholder")
    videoDetails.append(videoPlaceholder);

    let video = $("<video>");
    video.attr("src" , videoJson.videoUrl);
    video.attr("controls" , true);
    video.attr("poster" , "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg");
    videoPlaceholder.append(video);

    let videoTitle = $("<h2>")
    videoTitle.attr("class" ,"video-title" );
    videoTitle.html(videoJson.title);
    videoDetails.append(videoTitle);

    let videoDesc = $("<div>")
    videoDesc.attr("class" ,"video-desc");
    videoDesc.html(videoJson.description);
    videoDetails.append(videoDesc);

    let horizontalLine = $("<div>");
    horizontalLine.attr("class" ," horizontal");
    let line = $("<hr>");
    horizontalLine.append(line);
    leftCard.append(horizontalLine);

    let commentSection = $("<div>");
    commentSection.attr("class" , "comments");
    leftCard.append(commentSection);

    let commetLine = $("<div>");
    commetLine.html("Comments");
    commentSection.append(commetLine);

    // comments section goes here....
    for(var commentsData of videoJson.comments){
        console.log(commentsData.image);
        let reviewerCard = $("<div>");
        reviewerCard.attr("class" , "reviewer-card");
        commentSection.append(reviewerCard);
        let reviewerImage = $("<img>");
        reviewerImage.attr("src",commentsData.image);
        reviewerCard.append(reviewerImage);
        
        let reviewerDetails = $("<div>");
        reviewerDetails.attr("class" , "reviewer-details")
        reviewerCard.append(reviewerDetails);

        let reviewerName = $("<h3>");
        reviewerName.attr("class" , "reviewer-name");
        reviewerName.html(commentsData.name);
        reviewerDetails.append(reviewerName);

        let reviewerDesc = $("<p>");
        reviewerDesc.attr("class" ,"reviewer-desc")
        reviewerDesc.html(commentsData.comment);
        reviewerDetails.append(reviewerDesc);
    }

    let rightCard = $("<div>");
    rightCard.attr("class" , "right-card");
    $(".container").append(rightCard);

    let upcomingProjects = $("<h3>");
    upcomingProjects.html("Upcoming projects");
    rightCard.append(upcomingProjects);

    for(var posters of posterJson){
        let posterImageContainer = $("<div>");
        posterImageContainer.attr("class" , "poster");
        rightCard.append(posterImageContainer);

        let posterImage = $("<img>");
        posterImage.attr("src" , posters.imageUrl);
        posterImage.attr("alt" ," posters.title");

        posterImageContainer.append(posterImage);
    }
})();