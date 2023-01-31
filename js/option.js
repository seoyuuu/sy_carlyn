$(document).ready(function () {



    $(document).on('click', '.opt_btn', function () {
        let list_count = $('.opt_selected').children().length;
        let tmp_id = $(this).attr("id");


        if (list_count > 0) {
            let class_dupl_chk = false;
            for (let i = 0; i < list_count; i++) {
                class_dupl_chk = $('.opt_selected').children('.sel_box').eq(i).hasClass(tmp_id);

                if (class_dupl_chk) break;
            }

            if (class_dupl_chk) {
                alert("이미 선택한 옵션 입니다.")
            }
            else {
                make_opt_list(tmp_id)
            }
        }
        else {
            make_opt_list(tmp_id)
        }

        total();

    });

});


$(document).on('click', '.btn_qty', function () {
    qty_chg($(this).val(), $(this));
    total();
})
$(document).on('click', '.btn_price_delete', function () {
    $(this).parent().parent('.sel_box').remove();
    total();
})


function make_opt_list(tmp_id) {
    let price=80000;
    let b=  $('.opt_box input')
    let indexNo = $(this).index();
    let c = b.eq(indexNo);
 
    $('.opt_selected').append(
        `<div class="sel_box ${tmp_id}"> 
            <div class="opt_name">
                <input type="text" name="p_choiceSize" value="${tmp_id}" readonly style="border: none; outline: none">
            </div>
            <div class="opt_qty">
                <input type="button" class="btn_qty txt_minus" value="-">
                <input type="text" class="txt_qty" value="1" name="p_choiceQuantity" readonly>
                <input type="button" class="btn_qty txt_plus" value="+">
                <input type="text" value="${$(this).index()}" title="해당 아이템 방번호" class="chk_item_order">
            </div>      
            <div class="opt_price">
                <div>${price}원</div>
                <img src="./img/product/opt_delete.png" alt="" class="btn_price_delete">
 
            </div>
        </div>`
    ); 
}

function qty_chg(tmp_mark, el) {


    if(tmp_mark=="+") {
        console.log(el.prev()); 

        let curr_qty= +el.prev().val();
        el.prev().val(curr_qty+1)
    }
    else if(tmp_mark=="-") { 
        console.log(el.next()) 

        let curr_qty= +el.next().val();

        if(curr_qty - 1 <1) {
            alert("최소 주문 수량은 1개 입니다.");
        }
        else {
            el.next().val(curr_qty-1)
        }
    }
}

function total() {
let final_total = 0;
let price= 80000;

let list_count = $('.opt_selected').children().length;


if(list_count > 0) {

    for(let i=0; i<list_count; i++) {
        final_total += +$('.opt_selected').children('.sel_box').eq(i).children('.opt_qty').children('.txt_qty').val() * price;
    }
    
    let p_tot = final_total.toLocaleString('kr');
    $('.total').html(`<div><h4>총 상품 금액</h4> <span class="p_total">${p_tot} 원</span></div>`)
    
}
}