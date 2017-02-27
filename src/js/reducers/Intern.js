import { handleActions } from 'redux-actions'
// import _ from 'lodash'
// import XLSX from 'xlsx'
// import csvjson from 'csvjson'

const initialState = {
    list: []
}

export default handleActions({
    GET_INTERNLIST: {
        next (state, action) {
            console.log(action.payload)
            // let csv = csvjson.toArray(action.payload)
            // csv.shift()
            // csv.shift()
            // csv.shift()
            // csv.shift()
            // let list = csv.map((ele) => ({
            //     'name': ele[1],
            //     'start_year': ele[2],
            //     'period': ele[3],
            //     'content': ele[4],
            //     'reasonability': ele[5],
            //     'reason': ele[6],
            //     'review': ele[7],
            //     'recommend_rating': ele[8],
            //     'recommend': ele[9],
            //     'duration': ele[10],
            //     'job_title': ele[11],
            //     'protection': ele[12],
            //     'meaning': ele[13]
            // }))
            return {
                // list
            }
        },
        throw (state, { payload }) {
            console.log('qq')
            return state
        }
    }
}, initialState)

// https://github.com/SheetJS/js-xlsx/issues/285#issuecomment-240680073
