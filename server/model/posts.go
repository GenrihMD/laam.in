package main

type Post struct {
	ID    string `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
	Author Person `json: "author"`
}

var posts []Post