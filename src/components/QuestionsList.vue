<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>List of Questions</h1>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div>
                    <table border="1px" width="100%" text-align="center" >
                        <tr>
                            <td width="15%" text-align="center" >
                                Category
                            </td>    
                            
                            <td width="40%" text-align="center">
                                Question
                            </td>    
                            
                            <td width="15%" text-align="center">
                                Type
                            </td>

                            <td width="20%" text-align="center">
                                Options
                            </td>

                            <td width="10%" text-align="center">  
                                Action
                            </td> 
                        </tr>
                    </table>
                </div>
                <div v-for="(ques, index) in qlist"> 
                    <table border="1px" width="100%">
                        <tr>
                            <td width="15%">
                                {{ques.qcategory}}
                            </td>    
                            
                            <td width="40%">
                                {{ques.qdesc}}
                            </td>    
                            
                            <td width="15%">
                                {{ques.qtype}}
                            </td>
                             <td width="20%">
                                {{ques.qoptions}}
                            </td>
                            <td width="10%">
                                <div>
                                    <div
                                            id="edit"
                                            @click="editQuestion(index)"
                                            >Edit</div>
                                            
                                    <div
                                            id="del"
                                            @click="deleteQuestion(index)">
                                            Delete</div>
                                </div>   
                            </td> 
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from  '../main.js'
export default {
    props: ['qlist'],
    methods: {
        editQuestion(index) {
            eventBus.$emit('editques', index);

        },
        deleteQuestion(index){
            this.$emit('delques', index);
            
        } 
    }
}
</script>

<style scoped>
    #edit, #del {
        width: 40px;
        height: 20px;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }
    #edit {
        background-color: lightgreen;
    }
    #del {
        background-color: lightpink;
    }

    #edit:hover {
        background-color: lightseagreen;
    }               

    #del:hover {
        background-color: lightcoral;
    }
</style>