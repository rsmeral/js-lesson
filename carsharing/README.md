# Carsharing Trip Price Calculator

Create an application which will tell the user how much they would pay for a trip with one of the carsharing services.

The user will provide:
* distance travelled in kilometers
* duration of trip in minutes

The application will return:
* The total price for the trip in Kč

## Assignment

Modify the `calculateTripPrice` function in [autonapul.js](autonapul.js) and [car4way.js](car4way.js) so that it implements the pricing policies described in [autonapul.md](autonapul.md) and [car4way.md](car4way.md).

The code for handling user input and printing the result to the console is already written in [carsharing.js](carsharing.js), you shouldn't need to modify it.

## Interface

Run the program like this:

```sh
$ carsharing <service> <distance> <duration>
```

For example, to calculate a trip of 50 km over 2 hours using CAR4WAY:

```sh
$ carsharing car4way 50 120
```

The program will print the result to the console:

```
The price of a trip of 50 km taking 120 minutes with car4way is: 700 Kč
```

## Testing

To check whether your solution is correct, run the provided tests:

```sh
$ yarn run mocha autonapul.test.js
```

or

```sh
$ yarn run mocha car4way.test.js
```