common errors:
1. not including export statements (error message will say something is null, undefined, or boolean)
2. not including curly braces around components/properties being included in import statements. happens frequently in action creators. there will be no error message because it's a valid statement without them. console log the thing you're importing within the action creator to see what it's representing.
3. 'uncaught in promise type error' means there's an error that occurred inside of a promise. so check your promises for syntax.
4. 'objects are not valid as a React object' means you're probably passing in the payload something that's trapped inside of an array.



#RallyCoding


Weekly videos on the Javascript and React Ecosystem.

Each separate folder contains the code for each weekly video.  You can run any individual project by running `npm install` then `npm start`, then navigate to `localhost:8080` in your browser.

### Videos

Check it out here: [RallyCoding.com](http://www.rallycoding.com)

### Tutorials

Interested in learning more about React and Redux?  Check out [Modern React with Redux](https://www.udemy.com/react-redux/?couponCode=rallycoding19) if you're just getting started, or [Advanced React and Redux](https://www.udemy.com/react-redux-tutorial/?couponCode=rallycoding19) if you're looking for some more challenging material.
