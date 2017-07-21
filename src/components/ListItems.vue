<template>
  <div class="items">
      <h1>{{msg}}</h1>
      <ul>
        <div v-for="defaultListItem in defaultListItems" class="singlelistItemContainer">
            <div class="singlelistItem">
              <label class="singlelistItemLabel">{{defaultListItem.number}}</label>
              <button class="singlelistItemXButton" v-on:click="deleteListItem(defaultListItem)">x</button>
            </div>
        </div>
      </ul>

      <div class="listItemTotalContainer">
        <br/>
        <button class="listItemTotalButton" v-on:click="deleteAllListItems()">Clear All</button><br/><br/>
        <label class="listItemTotal">Total: {{numberSum}}</label>
      </div>

      <form v-on:submit="addListItem">
        <input class="addListItemField" type="number" v-model="newListItem.number" placeholder="Enter Number" v-on:keyup="pressKey">
        <input class="addListItemButton" type="submit" value="Add">
      </form>

      
  </div>
</template>

<script>
  export default {
    name: 'items',
    props:{
      msg: {
        type: String, //Number, Object, Functions
        default: 'Default Property Message From List Items: Down'
      }
    },
    data: function () {
      return {
        newListItem: {},
        defaultListItems: [
          {
            number: Math.ceil(Math.random()*10)
          },
          {
            number: Math.ceil(Math.random()*10)
          },
          {
            number: Math.ceil(Math.random()*10)
          }
        ],
      }
    },
    computed: {
      numberSum: function(){
        var sum = 0;
        for (var i = 0; i < this.defaultListItems.length; i++) {
          sum += +this.defaultListItems[i].number;
        }
        return sum;
        //return +this.numbers.first +  +this.numbers.second +  +this.numbers.third
        //return Object.values(this.defaultListItems[i].number).reduce((a, b) => a + b, 0)
        //return this.defaultListItems[0].number
      },
      /*
      //TODO Display Saved Data
      getNumbersFromState: function(){
        var listitems=[];
        foreach(this.numbers, function(value, key) {
             listitems.push(key);
           });
      },
      */
    },
    methods:{
      pressKey: function(){
        console.log(this.newListItem.number + ' entered on a "v-on:keyup" event');
      },
      addListItem: function(e){
        if(this.newListItem.number != null)
        {
          this.defaultListItems.push({
            number: this.newListItem.number
          });
        }
        e.preventDefault();
      },
      deleteListItem: function(listitem){
        this.defaultListItems.splice(this.defaultListItems.indexOf(listitem), 1);
      },
      deleteAllListItems: function(){
        this.defaultListItems.splice(0, this.defaultListItems.length);
        //while(this.defaultListItems.length > 0) {this.defaultListItems.splice(0, this.defaultListItems.length);}
        //this.defaultListItems = [];
      }
    },
    created: function(){
      console.log('created ran....');//We will make vue Router/vueResource request from here.

      /*//TODO Request Saved Data
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        //console.log(response.data);
        this.users = response.data;
      }); //the "this.$http.get" line above returns a promise of .then

      */
    }
  }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.singlelistItemContainer{
  text-align: center;
  width: 100%;
  background-color: #fcfcfc;
  padding: 1px;
}
.singlelistItem{
  margin: auto;
  padding: 1px;
  font-size: 24px;
  font-weight: bold;
  background-color: #fcfcfc;
  height: 44px;
  width:300px;
  border: 1px solid rgba(0,0,0,.12);
}
.singlelistItemLabel{
  padding-top: 5px;
  float: left;
  margin-left: 15px;
}
.singlelistItemXButton{
  float: right;
  width: 25px;
}
.listItemTotalContainer{
  text-align: center;
  width: 100%;
}
.listItemTotalButton, .addListItemButton{
  margin-left: 15px;
  width: 95px;
  font-size: 18px;
}
.listItemTotal{
  font-size: 24px;
  font-weight: bold;
}
.addListItemField{
  font-size: 18px;
  width: 150px;
}
</style>
