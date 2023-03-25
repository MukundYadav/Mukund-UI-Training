
// importing json files to javascript...
import posterJson from './posters.json' assert {type: 'json'};
import videoJson from './video.json' assert { type: 'json'};
// code for left card here.....
let leftCard = document.createElement("div");
leftCard.setAttribute("class" , "left-card")
document.getElementsByClassName("container")[0].append(leftCard);

let videoDetails = document.createElement("div");
videoDetails.setAttribute("class" , "video-details")
leftCard.append(videoDetails);

let videoPlaceholder = document.createElement("div");
videoPlaceholder.setAttribute("class","video-placeholder")
videoDetails.append(videoPlaceholder);

let video = document.createElement("video");
video.src = videoJson.videoUrl;
video.controls = true;
video.poster = "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg";
videoPlaceholder.append(video);

let videoTitle = document.createElement("h2")
videoTitle.setAttribute("class" ,"video-title" );
videoTitle.innerHTML = videoJson.title;
videoDetails.append(videoTitle);

let videoDesc = document.createElement("div")
videoDesc.className ="video-desc"
videoDesc.innerHTML = videoJson.description;
videoDetails.append(videoDesc);

let horizontalLine = document.createElement("div");
horizontalLine.setAttribute("class" ," horizontal");
let line = document.createElement("hr");
horizontalLine.append(line);
leftCard.append(horizontalLine);

let commentSection = document.createElement("div");
commentSection.setAttribute("class" , "comments");
leftCard.append(commentSection);

let commetLine = document.createElement("div");
commetLine.innerHTML = "Comments";
commentSection.append(commetLine);

// comments section goes here....
for(var commentsData of videoJson.comments){
    let reviewerCard = document.createElement("div");
    reviewerCard.setAttribute("class" , "reviewer-card");
    commentSection.append(reviewerCard);
    let reviewerImage = document.createElement("img");
    reviewerImage.src = commentsData.image;
    reviewerCard.append(reviewerImage);
    
    let reviewerDetails = document.createElement("div");
    reviewerDetails.setAttribute("class" , "reviewer-details")
    reviewerCard.append(reviewerDetails);

    let reviewerName = document.createElement("h3");
    reviewerName.setAttribute("class" , "reviewer-name");
    reviewerName.innerHTML = commentsData.name;
    reviewerDetails.append(reviewerName);

    let reviewerDesc = document.createElement("p");
    reviewerDesc.setAttribute("class" ,"reviewer-desc")
    reviewerDesc.innerHTML = commentsData.comment;
    reviewerDetails.append(reviewerDesc);
}

let rightCard = document.createElement("div");
rightCard.setAttribute("class" , "right-card");
document.getElementsByClassName("container")[0].append(rightCard);

let upcomingProjects = document.createElement("h3");
upcomingProjects.innerHTML = "Upcoming projects";
rightCard.append(upcomingProjects);

for(var posters of posterJson){
    let posterImageContainer = document.createElement("div");
    posterImageContainer.setAttribute("class" , "poster");
    rightCard.append(posterImageContainer);

    let posterImage = document.createElement("img");
    posterImage.src = posters.imageUrl;
    posterImage.alt = posters.title;

    posterImageContainer.append(posterImage);
}