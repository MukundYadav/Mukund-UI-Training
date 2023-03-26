(function() {
    let accountHoldersArray = [
        {
            accountNo: 5958393822939,
            cardNo: 5051492838393902,
            atmPIN: 5023,
            accountBalance: 50594
        },
        {
            accountNo: 5958393828383,
            cardNo: 5051492838749283,
            atmPIN: 5938,
            accountBalance: 3034
        },
        {
            accountNo: 5958393882909,
            cardNo: 5051492838093408,
            atmPIN: 6484,
            accountBalance: 20230
        },
        {
            accountNo: 5958393039023,
            cardNo: 5051492838659398,
            atmPIN: 8483,
            accountBalance: 12933
        },
        {
            accountNo: 5958393909235,
            cardNo: 50514928388374023,
            atmPIN: 0930,
            accountBalance: 0
        }
    ]

    let getBalance = (account_number) => {
        for(account of accountHoldersArray) {
            if(account.accountNo === account_number) {
                return account.accountBalance;
            }
        }
    }

    // console.log(getBalance( 5958393039023));
    let accountValidation = (account_number, card_number, atm_pin) => {
        for(account of accountHoldersArray) {
            if(account.accountNo === account_number && account.cardNo === card_number && account.atmPIN === atm_pin) {
                return true;
            }
        }
        return false;
    }

    let deposit = (account_number, amount) => {
        for(account of accountHoldersArray) {
            if(account.accountNo === account_number) {
                account.accountBalance += amount;
                alert("Amount of "+amount+" deposited to your account and the current balance is : "+getBalance(account_number));
                alert("Thank you , Visit again..");
            }
        } 
    }
    // console.log(deposit(5958393909235,1));

    let withdraw = (account_number, amount) => {
        for(account of accountHoldersArray) {
            if(account.accountNo === account_number) {
                if(amount <= getBalance(account_number)) {
                    account.accountBalance -= amount;
                    alert("Amount "+amount+" withdrawn and the current balance is "+getBalance(account_number));
                    alert("Thank you , Visit again..");
                } else {
                    alert("low balance.... please add some money before withdrawing..");
                    return;
                }
            }
        }

    }

    let ChooseOne = (choice) => {
      if(choice === 1) {
            let account_number = parseInt(prompt("Enter account number please"));
            let card_number = parseInt(prompt("Enter card number please"));
            let atmPIN = parseInt(prompt("enter atm pin number"));

            if(accountValidation(account_number, card_number, atmPIN)) {
                let amount = parseInt(prompt("enter amount to be deposited....."));
                deposit(account_number, amount);
            } else {
                alert("please enter the details correctly...");
                ChooseOne(choice);
            }
    }
     else if(choice === 2) {
        let account_number = parseInt(prompt("Enter account number please"));
        let card_number = parseInt(prompt("Enter card number please"));
        let atmPIN = parseInt(prompt("enter atm pin number"));

        if(accountValidation(account_number, card_number, atmPIN)) {
            let amount = parseInt(prompt("enter amount to be withdrawn"));
            withdraw(account_number, amount);
        } else {
            alert("please enter the details correctly...");
            ChooseOne(choice);
        }
    }
}
    function choice() {
        let option = parseInt(prompt("Enter your choice: \n \n1.Deposit Cash. \n2.Withdraw Cash."));
        if(option === 1 || option === 2 ) {
            ChooseOne(option);
            choice();
        } else {
            alert("Please enter valid input...");
            choice();
        }
    }
    choice();
})();