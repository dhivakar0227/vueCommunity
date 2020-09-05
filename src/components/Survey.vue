<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Survey Questionnaire</h1>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h4 id="validate">{{ isValidateDetails }}</h4>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div>
                    <table border="1px" width="100%" text-align="center" >
                        <tr>
                            <td width="50%" text-align="center">
                                Question
                            </td>    
                            
                            <td width="50%" text-align="center">
                                Response
                            </td>
 
                        </tr>
                    </table>
                </div>
                <div v-for="(ques, index) in slist"> 
                    <table border="1px" width="100%">
                        <tr>
                            <td width="50%">
                                {{ques.qdesc}}
                            </td>    
                            
                            <td width="50%">
                                <textarea
                                    id="question"
                                    rows="3" cols="50"
                                    class="form-control"
                                    v-if="ques.qtype === 'Freeform'"
                                    v-model=ques.sanswer>
                                </textarea>

                                <select
                                    id="category"
                                    class="form-control"
                                    v-model=ques.sanswer
                                    v-else>
                                    <option v-for="ops in ques.qoptionsArr"> {{ ops }}</option>
                                </select>

                            </td>
                            
                        </tr>
                    </table>
                </div>
                <div>
                    <div
                            id="save"
                            @click="saveSurvey()"
                            >Save Survey</div>
                            
                    <div
                            id="complete"
                            @click="completeSurvey()">
                            Complete Survey</div>
                </div> 
            </div>

        </div>
    </div>  
</template>

<script>
export default {
    props: ['slist'],
    data() {
        return {
            surveylist: [],
            isValidateFail: true,
            isValidateDetails: ''
        }
    },
    methods: {
        doSurveyPrep() {
            for (var i=0; i< this.slist.length; i++ ) {
                this.surveylist.push ({
                    uid: this.slist[i].uid,
                    qid: this.slist[i].qid,
                    qdesc: this.slist[i].qdesc,
                    qtype: this.slist[i].qtype,
                    qcategory: this.slist[i].qcategory,
                    qoptions: this.slist[i].qoptions,
                    sanswer: this.slist[i].sanswer,
                    qoptionsArr: this.slist[i].sanswer,
                    sanswerArr: this.slist[i].sanswerArr
                 
                });
            }
        },
        saveSurvey() {

            //for (var i=0; i< this.slist.length; i++ ) {
            //    console.log(i);
            //    console.log(this.slist[i].uid);
            //    console.log(this.slist[i].qid);
            //    console.log(this.slist[i].qdesc);
            //    console.log(this.slist[i].qtype);
            //    console.log(this.slist[i].qcategory);
            //    console.log(this.slist[i].qoptions);
            //    console.log(this.slist[i].sanswer);
            //    console.log(this.slist[i].sanswer);
            //    console.log(this.slist[i].sanswerArr);
            //}
            this.$emit("saveSurvey", this.slist)
        },

         completeSurvey() {
            this.isValidateFail = true;
            this.isValidateDetails='';
            for (var i=0; i< this.slist.length; i++ ) {
                if (this.slist[i].sanswer == null || this.slist[i].sanswer.trim() == '') {
                    this.isValidateFail = false;
                    if (this.isValidateDetails.trim() == '') {
                        this.isValidateDetails = "Please fill the following questions - "+ this.slist[i].qdesc;
                    } else {
                        this.isValidateDetails = this.isValidateDetails + ", " + this.slist[i].qdesc;
                    }
                }
            }
            if (this.isValidateDetails == true) {
                this.$emit("completeSurvey", this.slist)
            }
        }
        
    },
    mounted() {
        this.doSurveyPrep();
    }
}

</script>

<style scoped>
    #validate {
        background-color: red;
    }
    #complete, #save {
        width: 150px;
        height: 20px;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }
    #save {
        background-color: lightgreen;
    }
    #complete {
        background-color: lightpink;
    }

    #save:hover {
        background-color: lightseagreen;
    }               

    #complete:hover {
        background-color: lightcoral;
    }
</style>