import java.util.Scanner;

public class ReverseNumber {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a Number:");
        int num = sc.nextInt();

        // 1. Using Algorithm
        int rev = 0;
        int temp = num;

        while (temp != 0) {
            rev = rev * 10 + temp % 10;
            temp = temp / 10;
        }

        System.out.println("Reverse Number using Algorithm: " + rev);


        // 2. Using StringBuffer class
        StringBuffer sb = new StringBuffer(String.valueOf(num));
        StringBuffer reverse = sb.reverse();

        System.out.println("Reverse Number using StringBuffer: " + reverse);


        // 3. Using StringBuilder class
        StringBuilder sb1 = new StringBuilder();
        sb1.append(num);

        sb1.reverse();

        System.out.println("Reverse Number using StringBuilder: " + sb1);


        sc.close();
    }
}
