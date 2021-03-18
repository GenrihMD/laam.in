package main

import (
	"github.com/GenrihMD/subs/posts"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/posts", posts.GetPosts).Methods("GET")
	router.HandleFunc("/posts", posts.CreatePost).Methods("POST")
	router.HandleFunc("/posts/{id}", posts.GetPost).Methods("GET")
	router.HandleFunc("/posts/{id}/author", posts.GetPostAuthor).Methods("GET")
	router.HandleFunc("/posts/{id}", posts.UpdatePost).Methods("PUT")
	router.HandleFunc("/posts/{id}", posts.DeletePost).Methods("DELETE")
	http.ListenAndServe(":8000", router)
}
