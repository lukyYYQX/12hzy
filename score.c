#include <stdio.h>
 int main(){
 	int score,a;
 	
 	printf("请输入您的成绩:");
 	scanf("%d",&score);
 	
 	/*用if-else实现成绩等级 
	 if(score>=90){
 		printf("A");
	 }else if(score<90&&score>=80){
	 	printf("B");
	 }else if(score<80&&score>=70){
	 	printf("C");
	 }else if(score<70&&score>=60){
	 	printf("D");
	 }else if(score<60){
	 	printf("F");
	 }*/
	  a=score/10;
	 switch(a){
	 	case 10:printf("A\n");break;
	 	case 9:printf("A\n");break;
	 	case 8:printf("B\n");break;
	 	case 7:printf("C\n");break;
	 	case 6:printf("D\n");break;
	 	case 5:printf("F\n");break;
	 }
	 
 	return 0;
 }
