public class EvenAndOddDigits {

    public static void main(String[] args) {

        int num = 12345;

        int even_count = 0;
        int odd_count = 0;

        while (num > 0)  //12345 1234 123 12 1
        {
            int rem = num % 10;  //5 4 3 2 1

            if (rem % 2 == 0)
            {
                even_count++;  //4 2
            }
            else
            {
                odd_count++;  //5 3 1
            }

            num = num / 10;  //1234 123 12 1 0
        }

        System.out.println("Even Digits: " + even_count);
        System.out.println("Odd Digits: " + odd_count);

    }
}
