package main

// Subs is struct for subs
type Subs struct {
	lang string
}

// NewSubs construct new Subs
func NewSubs(lang string) *Subs {
	return &Subs{
		lang,
	}
}

func init() {

}

func (s *Subs) read() {

}
