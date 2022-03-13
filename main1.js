function get_calc(btn) {
      if(btn.value == "=") {
        document.calc.display.value = eval(document.calc.display.value);
      } else if (btn.value == "AC") {
        document.calc.display.value = "";
      } else {
        document.calc.display.value += btn.value;
        input_check();
        
      }
}
// 入力チェックの関数
//先頭の値が0か演算子の場合は初期化（「−」のみ先頭を許可)

function input_check(){
  if(document.calc.display.value.slice( 0, 1 ) == "0"){
      document.calc.display.value = "";
    }else if(document.calc.display.value.slice( 0, 1 ) == "+"){
      document.calc.display.value = "";
    }else if(document.calc.display.value.slice( 0, 1 ) == "*"){
      document.calc.display.value = "";
    }else if(document.calc.display.value.slice( 0, 1 ) == "/"){
      document.calc.display.value = "";
    }
    
    // (末尾２桁が演算子だったら、演算子を上書き)
    let operator = ['++', '+-', '+*', '+/', '--', '-+', '-*', '-/', '**', '*+', '*-', '*/', '//', '/+', '/-', '/*','..','.+','.-','./','.*'];
    
      // 末尾２桁が演算子の場合、末尾の演算子だけを削除
      if(operator.includes(document.calc.display.value.slice( -2 ))){
          document.calc.display.value = document.getElementById("display").value.slice(0, -1);
        }
    }
