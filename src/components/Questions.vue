<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Add a Question - test</h1>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="category">Category</label>
                    <select
                            id="category"
                            class="form-control"
                            v-model="quesData.qcategory">
                        <option v-for="catg in categories"> {{ catg }}</option>
                    </select>
                </div>
            </div>
            <hr>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="question">Question</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="question"
                            rows="3" cols="50"
                            class="form-control"
                            v-model="quesData.qdesc"></textarea>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="freeform">
                        <input
                                type="radio"
                                id="freeform"
                                value="Freeform"
                                v-model="quesData.qtype" > Freeform
                    </label>
                    <label for="optionsingle">
                        <input
                                type="radio"
                                id="optionsingle"
                                value="Option (Single)"
                                v-model="quesData.qtype" > Option (Single)
                    </label>
                    <label for="optionmultiple">
                        <input
                                type="radio"
                                id="optionmultiple"
                                value="Option (Multiple)"
                                v-model="quesData.qtype" > Option (Multiple)
                    </label>
                </div>
            </div>
            <hr/>
            <div class="row" v-if="isOption">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <label for="options">Configure Options (enter options seperated by semicolon ";")</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="options"
                            rows="3" cols="50"
                            class="form-control"
                            v-model="quesData.qoptions"></textarea>
                    <br>
                </div>
                <hr>
            </div>
            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted()">Add/Update!
                    </button>
                </div>
            </div>
            <!--<hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <label >List of all questions</label>
                    <p v-for="ques in qlist"> {{ ques.qdesc }} </p>
                </div>
            </div>-->
        </form>
    </div>    
</template>

<script>
import { eventBus } from  '../main.js'
export default {
    data () {
            return {
                quesData: {
                    qdesc: 'Add a question...',
                    qtype: 'Freeform',
                    qcategory: 'Personal Information',
                    qid: '',
                    qoptions: ''
                },
                selectedPriority: 'High',
                categories: ['Personal Information', 'Program Management Experience', 'Technical Experience']
            }
            
        },
    props: ['qlist'],
    computed: {
        isOption: function() {
            return this.quesData.qtype.includes("Option");
        }
    },
    methods: {
        submitted() {
            this.$emit("quesAdded", this.quesData)
        }
    },
    created() {
        eventBus.$on('editques', (index) => {
           this.quesData.qid = index;
           this.quesData.qdesc = this.qlist[index].qdesc;
           this.quesData.qtype = this.qlist[index].qtype;
           this.quesData.qcategory = this.qlist[index].qcategory;
           this.quesData.qoptions = this.qlist[index].qoptions;
        });
    }
}
</script>

<style scoped>
</style>