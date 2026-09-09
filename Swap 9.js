import java.util.Scanner;

public class LargestOfNumbers {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter First Number:");
        int a = sc.nextInt();

        System.out.println("Enter Second Number:");
        int b = sc.nextInt();

        System.out.println("Enter Third Number:");
        int c = sc.nextInt();

        //Appraoch1 - Logic

        if (a > b && a > c)
        {
            System.out.println(a + " is Largest Number");
        }
        else if (b > a && b > c)
        {
            System.out.println(b + " is Largest Number");
        }
        else
        {
            System.out.println(c + " is largest Number");
        }

        //Approach2 - Ternary Operator

        int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

        System.out.println(largest + " is Largest Number (Ternary Operator)");

    }
}
