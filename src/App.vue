<template>
  <div class="container">
       <communityQuestionsadder :qlist="queslist"  @quesAdded="newQues"> </communityQuestionsadder> 
  </div>
</template>

<script>
import QuestionsAdder from "./components/Questions";
export default {
  data: function() {
    return {
      queslist: []
    }
  },
  methods: {
    newQues(quesData) {

       if (quesData.qid == '') {
          this.queslist.push ({
          qid: '',
          qdesc: quesData.qdesc,
          qtype: quesData.qtype,
          qcategory: quesData.qcategory
          });
        }  
             
    }
  },
  components: {
    communityQuestionsadder: QuestionsAdder
  }
}
</script>

<style>

</style>
