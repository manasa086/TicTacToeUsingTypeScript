class Tictactoe
{
    main_div:HTMLDivElement;
    child_div:HTMLDivElement;
    count:number;
    wins:number[][];
    id_arr_x: string[];
    id_arr_y :string[];
    to_disable:number[];
    ids:number[];
    turn:string;
    displayTable()
    {
        this.turn = (<HTMLInputElement>document.getElementById('player')).value.toUpperCase();
        if (this.turn == "X" || this.turn == "O") {
        this.child_div.innerHTML = "";
        let position =<HTMLDivElement>document.getElementById("pos1");
        position.innerHTML = `<table>
        <tbody>
            <tr>
                <td id=11>
                    <input type="text" id=1 class="input" onclick="tic.inputClick(this.id)">
                </td>
                <td id=12>
                    <input type="text" id=2  class="input" onclick="tic.inputClick(this.id)">
                </td>
                <td id=13>
                    <input type="text" id=3  class="input" onclick="tic.inputClick(this.id)">
                </td>
            </tr>
            <tr>
                <td id=14>
                    <input type="text" id=4 class="input" onclick="tic.inputClick(this.id)">
                </td>
                <td id=15>
                    <input type="text" id=5  class="input" onclick="tic.inputClick(this.id)">
                </td>
                <td id=16>
                    <input type="text" id=6  class="input" onclick="tic.inputClick(this.id)">
                </td>
            </tr>
            <tr>
                <td id=17>
                    <input type="text" id=7  class="input" onclick="tic.inputClick(this.id)">
                </td>
                <td id=18>
                    <input type="text" id=8  class="input" onclick="tic.inputClick(this.id)">
                </td>
                <td id=19>
                    <input type="text" id=9  class="input"  onclick="tic.inputClick(this.id)">
                </td>
            </tr>
        </tbody>
        </table>`;
        this.main_div.appendChild(position);
        }
        else {
            document.body.innerHTML = "<p class = 'heading'> TIC TAC TOE </p>";
            document.body.innerHTML += "<p class='enter'>Please Enter Player X/x (or) O/o</p>";
            document.body.innerHTML += "<p><button class='enter_but' onclick=tic.reload()>Reload</button></p>"
        }
    }
    inputClick(id:string) {
        let str = "1" + id.toString();
        document.getElementById(str).innerHTML = "<input type=text readonly id=" + this.count + " value=&nbsp;&nbsp;" + this.turn + ">";
        this.to_disable.push(this.count);
        this.count++;
        let index = this.ids.indexOf(Number(id));
        this.ids.splice(index, 1);
        if (this.ids.length == 0) {
            this.completed("Tie");
        }
        if (this.turn == "X") {
    
            this.id_arr_x.push(id);
            if (this.check_X()) {
                this.completed("X");
            }
        }
        if (this.turn == "O") {
            this.id_arr_y.push(id);
            if (this.check_Y()) {
                this.completed("O");
            }
        }
        if (this.turn == "X") {
            this.turn = "O";
        } else
            this.turn = "X";

    }
    check_X():boolean {
        for (let i = 0; i < this.wins.length; i++) {
            let move = this.wins[i][0].toString();
            let move1 = this.wins[i][1].toString();
            let move2 = this.wins[i][2].toString();
            //  console.log(move, move1, move2);
            let opt=false;
            let opt1=false;
            let opt2=false;
            for(let i=0;i<this.id_arr_x.length;i++)
            {
                if(this.id_arr_x[i]==move)
                    opt=true;

            }
            for(let i=0;i<this.id_arr_x.length;i++)
            {
                if(this.id_arr_x[i]==move1)
                    opt1=true;

            }
            for(let i=0;i<this.id_arr_x.length;i++)
            {
                if(this.id_arr_x[i]==move2)
                    opt2=true;

            }

            if (opt && opt1 && opt2) {
                return true;
            }
        }
        return false;
    }
    check_Y():boolean {
        for (let i = 0; i < this.wins.length; i++) {
            let move = this.wins[i][0].toString();
            let move1 = this.wins[i][1].toString();
            let move2 = this.wins[i][2].toString();
            //  console.log(move, move1, move2);
            let opt=false;
            let opt1=false;
            let opt2=false;
            for(let i=0;i<this.id_arr_y.length;i++)
            {
                if(this.id_arr_y[i]==move)
                    opt=true;

            }
            for(let i=0;i<this.id_arr_y.length;i++)
            {
                if(this.id_arr_y[i]==move1)
                    opt1=true;

            }
            for(let i=0;i<this.id_arr_y.length;i++)
            {
                if(this.id_arr_y[i]==move2)
                    opt2=true;

            }

            if (opt && opt1 && opt2) {
                return true;
            }
        }
        return false;
    }
    completed(winner:string) {
        for (let i = 0; i < this.ids.length; i++) {
            document.getElementById(this.ids[i.toString()]).onclick = null;
            (document.getElementById(this.ids[i.toString()]) as HTMLInputElement).disabled = true;
        }
        // for (let i = 0; i < this.to_disable.length; i++) {
        //     (document.getElementById(this.ids[i.toString()].toString()) as HTMLInputElement).disabled = true;
        // }
        let new_div =<HTMLDivElement>document.getElementById("div1");
        new_div.setAttribute("class", "overlay");
        let division =<HTMLDivElement>document.createElement("div");
        division.setAttribute("class", "division");
        if (winner == "Tie") {
            let p1 =<HTMLElement>document.createElement("p");
            p1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;It's a " + winner + ".......";
            p1.setAttribute("class", "p1");
            p1.innerHTML += `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-neutral" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
            <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
          </svg>`;
            p1.innerHTML += "<button class='res_but1' onclick=tic.reload()>Restart</button>";
            division.appendChild(p1);
            this.main_div.appendChild(division);
        } else {
            let p2 = <HTMLElement>document.createElement("p");
            p2.innerHTML = "Player " + winner + " Wins.....";
            p2.innerHTML += `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
            <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
            </svg>`;
            p2.innerHTML += "<button class='res_but' onclick=tic.reload()>Restart</button>";
            p2.setAttribute("class", "p1");
            division.appendChild(p2);
            this.main_div.appendChild(division);
    
        }
    }
    reload() {
        location.reload();
    }
    
}
let tic=new Tictactoe();
tic.main_div=<HTMLDivElement>document.getElementById("div");
tic.child_div =<HTMLDivElement>document.createElement("div");
tic.child_div.innerHTML = `<span class='span'>Select a player X/x (or) O/o:</span>`;
tic.child_div.innerHTML += `<input type=text id='player' class='inp'>`;
tic.child_div.innerHTML += `<br><br><button onclick="tic.displayTable()" class='start'>Submit</button>`;
tic.main_div.appendChild(tic.child_div);
tic.count=20;
tic.wins = [
    [1, 2, 3],
    [1, 4, 7],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
tic.ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
tic.to_disable=[];
tic.id_arr_x=[];
tic.id_arr_y=[];