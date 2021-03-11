# Web Client & Server Prog. (CPNT-262)

### Author/Creator: Makayla Martineau Raymundo

## Dynamic Image Gallery + Deployed Static Express Website
This assignment is a combination of both CPNT262-a2 and CPNT262-a3, since you already have the README for the [CPNT262-a2](https://github.com/MakaylaMR/cpnt262-a2) this README will only include information for the CPNT262-a3 assignment.

This project includes `npm`, `express`, a custom 404 page and deployed from a live Heroku server..

## Links

GitHub Repository: https://github.com/MakaylaMR/cpnt262-a3

Heroku App: https://jeepgallery.herokuapp.com/

## Hints

### Image Array

You can find the image array in `scripts\main.js`.

- lines 3 - 103

These images are my own and do not have a 3rd party web page to link to. You can expect he objects to include the following information (please note it will not include `linkURL`):

- `id`
- `title`
- `description`
- `width`
- `height`
- `pathURL`
- `credit`
- `creditLink`
- `alt`

### Array Loop and Output

You can find the image array in `scripts\main.js`.

- lines 105 - 138

I have used the `append` method for this project. This allowed me to nest elements into other elements. This made it possible for me to style the content without everything stacking on top of each other. When using the `output +=` method I found it impossible to style the content the way I wanted to.

Any information as to why I used certain code can be found in the comments from lines 105-138.

(Yes I know the credit could have displayed once, however, the figure looked too empty then and decided to include it with every image element)

### Setup and Deployment

Images are located inside `assets\images`. You can expect the gallery to be responsive to all screen sizes. (the use of media queries was used to achieve this go to `styles\main.css` lines 129 - 154).

The Javascript is an external script sheet `scripts\main.js`, and is linked inside the head of the HTML

- line 9

CSS pages are external stylesheets and are both located inside the `styles` directory, linked in the head of the HTML

- lines 7 - 8

## Attributions

| Author/Creator |                                              Original Work                                               |                                                                 License |
| -------------- | :------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------------------: |
| Google         |                    [Google Fonts](https://fonts.google.com/?preview.text_type=custom)                    |             [Google Font License](https://fonts.google.com/attribution) |
| FreeCodeCamp   | [FreeCodeCamp Loops](https://forum.freecodecamp.org/t/its-this-a-good-way-to-create-a-image-loop/323175) | [Terms of Service](https://www.freecodecamp.org/news/terms-of-service/) |

## Attributions (in-class)

| Person      |                                  Links                                   |
| ----------- | :----------------------------------------------------------------------: |
| Ashlyn Knox | [Link](https://github.com/ashlyn-knox/js-sandbox/blob/main/gallery.html) |