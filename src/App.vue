<template>
  <div class="container">
      <communityQuestionsadder :qlist="queslist" @quesAdded="newQues"> </communityQuestionsadder> 
      <communityQuestionslister :qlist="queslist" @delques = "delQues" > </communityQuestionslister> 
  </div>
</template>

<script>
import QuestionsAdder from "./components/Questions";
import QuestionsLister from "./components/QuestionsList";

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
        }  else {
          this.queslist[quesData.qid].qdesc = quesData.qdesc;
          this.queslist[quesData.qid].qtype = quesData.qtype;
          this.queslist[quesData.qid].qcategory = quesData.qcategory;
        }
             
    },

    delQues(index) {
      this.queslist.splice(index, 1);
    }


  },
  components: {
    communityQuestionsadder: QuestionsAdder,
    communityQuestionslister: QuestionsLister
  }
}
</script>

<style>

</style>
