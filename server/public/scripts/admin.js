"use strict";
//Description: this script will dynamically list all users and emails from server side users_data.json 
//Author:Cate Speakman

//this is the ready function to populate list of users and emails at the time the page loads

$(function () {
   
        let objs;
        $("#userListDiv").show();

        $.getJSON("/admin/data", function (users) {

            objs = users;
            $("#userTable tbody").empty();

            for (let i = 0; i < objs.length; i++) {

                let userRow = "<tr><td>" + objs[i].username
                    + "</td><td>" + objs[i].email
                    + "</td></tr>";
                $("#userTable tbody").append(userRow);

            }//ends for loop for populating user table 
        });//ends JSON function
    
})//ends ready function