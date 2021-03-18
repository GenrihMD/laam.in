package posts

import (
	"encoding/json"
	"math/rand"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

func GetPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(posts)
}

func CreatePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var post Post
	_ = json.NewDecoder(r.Body).Decode(&post)
	post.ID = strconv.Itoa(rand.Intn(1000000))
	posts = append(posts, post)
	json.NewEncoder(w).Encode(&post)
}

func GetPost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for _, item := range posts {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&Post{})
}

func GetPostAuthor(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for _, item := range posts {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item.Author)
			return
		}
	}
	json.NewEncoder(w).Encode(&Post{})
}

func UpdatePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range posts {
		if item.ID == params["id"] {
			posts = append(posts[:index], posts[index+1:]...)
			var post Post
			_ = json.NewDecoder(r.Body).Decode(&post)
			post.ID = params["id"]
			posts = append(posts, post)
			json.NewEncoder(w).Encode(&post)
			return
		}
	}
	json.NewEncoder(w).Encode(posts)
}

func DeletePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range posts {
		if item.ID == params["id"] {
			posts = append(posts[:index], posts[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(posts)
}