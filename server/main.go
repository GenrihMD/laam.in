package main

import (
	"net/http"
)

// HomeHandler handle Home
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	return
}

func main() {
	subs := NewSubs("eng")

	print(subs)

	// router := mux.NewRouter()
	// router.HandleFunc("/", HomeHandler)

	// http.Handle("/", router)
}
