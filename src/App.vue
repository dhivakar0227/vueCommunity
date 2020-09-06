<template>
  <div class="container">
      <communityQuestionsadder :qlist="queslist" @quesAdded="newQues"> </communityQuestionsadder> 
      <communityQuestionslister :qlist="queslist" @delques="delQues" > </communityQuestionslister> 
      <communityQuestionsSurvey :slist="surveylist" @saveSurvey="saveSurvey" @completeSurvey="completeSurvey" > </communityQuestionsSurvey> 
      
  </div>
</template>

<script>
import QuestionsAdder from "./components/Questions";
import QuestionsLister from "./components/QuestionsList";
import QuestionsSurvey from "./components/Survey"
import { returnSameStringRequest } from "./questions_pb"
import { QuestionServiceClient } from "./questions_grpc_web_pb"

export default {
  data: function() {
    return {
      queslist: [],
      surveylist: []
    }
  },

  methods: {
      // to be populated from database
    dopopulateSlist: function(quesData){
      this.surveylist.push ({
                uid: '386398',
                qid: '',
                qdesc: quesData.qdesc,
                qtype: quesData.qtype,
                qcategory: quesData.qcategory,
                qoptions: quesData.qoptions,
                sanswer: '',
                qoptionsArr: quesData.qoptions.split(";"),
                sanswerArr: ''
          });
    },

    newQues(quesData) {
       if (quesData.qid != '') {
          this.queslist[quesData.qid].qdesc = quesData.qdesc;
          this.queslist[quesData.qid].qtype = quesData.qtype;
          this.queslist[quesData.qid].qcategory = quesData.qcategory;
          this.queslist[quesData.qid].qoptions = quesData.qoptions;     
        }  else {
          this.queslist.push ({
                qid: '',
                qdesc: quesData.qdesc,
                qtype: quesData.qtype,
                qcategory: quesData.qcategory,
                qoptions: quesData.qoptions
          });
        }
        //to be deleted
        this.dopopulateSlist(quesData);     
    },
    
    delQues(index) {
      this.queslist.splice(index, 1);
    },

    saveSurvey(slist) {
      for (var i=0; i< slist.length; i++ ) {
          console.log(i);
          console.log(slist[i].uid);
          console.log(slist[i].qid);
          console.log(slist[i].qdesc);
          console.log(slist[i].qtype);
          console.log(slist[i].qcategory);
          console.log(slist[i].qoptions);
          console.log(slist[i].sanswer);
          console.log(slist[i].sanswer);
          console.log(slist[i].sanswerArr);
      }
    },

    completeSurvey(slist) {
      
    }

  },
  components: {
    communityQuestionsadder: QuestionsAdder,
    communityQuestionslister: QuestionsLister,
    communityQuestionsSurvey: QuestionsSurvey
  },

  created: function() {
    //this.client = new QuestionServiceClient("http://localhost:8080", null, null);
    //this.returnSameString();
    console.log("Successfully created grpc Service")
  },
}
</script>

<style>

</style>
