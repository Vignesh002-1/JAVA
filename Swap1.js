public class Swapping2Numbers {

    public static void main(String[] args) {

        int a = 10, b = 20;

        System.out.println("Before swapping values are.. " + a + " " + b);

        // Logic 1 - Using third variable
        /*
        int t = a;
        a = b;
        b = t;
        */

        // Logic 2 - Using + and -
        /*
        a = a + b;
        b = a - b;
        a = a - b;
        */

        // Logic 3 - Using * and /
        /*
        // a and b should not be zero
        a = a * b;
        b = a / b;
        a = a / b;
        */

        // Logic 4 - Using Bitwise XOR
        /*
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        */

        // Single statement
        b = a + b - (a = b);

        System.out.println("After swapping values are.. " + a + " " + b);
    }
}
