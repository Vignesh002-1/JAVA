public class ReverseString {

    public static void main(String[] args) {
        String str = "ABCD";

        // 1. Using + (string concatenation) operator
        reverseUsingConcat(str);

        // 2. Using character array
        reverseUsingCharArray(str);

        // 3. Using StringBuffer class
        reverseUsingStringBuffer(str);
    }

    // 1. Using + operator
    static void reverseUsingConcat(String str) {
        String rev = "";
        int len = str.length();
        for (int i = len - 1; i >= 0; i--) {
            rev = rev + str.charAt(i);
        }
        System.out.println("Reverse String is: " + rev);
    }

    // 2. Using character array
    static void reverseUsingCharArray(String str) {
        char[] a = str.toCharArray();
        String rev = "";
        int len = a.length;
        for (int i = len - 1; i >= 0; i--) {
            rev = rev + a[i];
        }
        System.out.println("Reverse String is: " + rev);
    }

    // 3. Using StringBuffer class
    static void reverseUsingStringBuffer(String str) {
        StringBuffer sb = new StringBuffer(str);
        System.out.println("Reverse String is: " + sb.reverse());
    }
}
