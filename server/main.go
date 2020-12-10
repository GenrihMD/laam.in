package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

// HomeHandler handle Home
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	return
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", HomeHandler)
	http.Handle("/", router)
}
