# Euclids Algorithm

Euclids algorithm is an efficient way to compute the greatest common divisor of two natural numbers. It was first described by the Greek mathematician Euclid in his *Elements* (300 BC). Being one of the oldest algorithms in use today, it can amongst other things be used to reduce fractions to their simplest form. It also has implementations in many cryptographic calculations.  

By reversing the steps of the euclidian algorithm the gcd can be expressed as a sum of the two original numbers each multiplied by a positive or negative integer. The fact that the GDC can be expressed in this way is known as Bezout's identity.  

In this project I attempt to vizualise this algorithm on a HTML canvas using plain JS. The JS code doesn't follow the actual recursive algorithm, but plainly increases a counter to find the largest possible sqare into which the are formed by the two parameters can be divided. The GCD is visualized as a red area within the rectangle formed by the two input params.

