Notiflix.Loading.init({zindex:999999});Notiflix.Block.init({zindex:9999999});Notiflix.Notify.init({zindex:99999999,position:"right-bottom",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"zoom"});Notiflix.Report.init({zindex:999999999,plainText:!1,width:"auto",className:"custom-notiflix-report",svgSize:"0px"});const r=Notiflix.Notify,b=(e="info",t="No Message")=>{switch(e){case"success":Notiflix.Notify.success(t);break;case"failure":Notiflix.Notify.failure(t);break;case"warning":Notiflix.Notify.warning(t);break;case"info":Notiflix.Notify.info(t);break;default:Notiflix.Notify.info(t);break}};window.rebound=({form:e=null,data:t=null,method:s="POST",url:o=null,refresh:v=!1,reset:g=!0,reload:N=!1,redirect:n=null,block:l="empty",beforeSendCallback:f=null,successCallback:u=null,errorCallback:d=null,completeCallback:c=null,notification:x=!0,logging:a=!0,returnData:w=!1,processData:h=!1})=>{if(e===null&&t===null)throw new Error("No form or data provided in rebound()");if(o===null)throw new Error("No url provided in rebound()");let p;if(e!==null){const i=$(e)[0];p=new FormData(i)}$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({url:o,method:s,data:t!=null?t:p,processData:h,contentType:h?"application/x-www-form-urlencoded":!1,beforeSend:function(){l&&(l!=="empty"?Notiflix.Block.hourglass(l):Notiflix.Loading.hourglass()),f!==null&&f.apply(null,arguments)},success:function(i){return a&&console.log(i),l&&(l!=="empty"?Notiflix.Block.remove(l):Notiflix.Loading.remove()),g&&e&&$(e).find("input").each(function(){$(this).val("").trigger("change")}),N&&location.reload(),x&&b(i.status,i.message),(v||i.refresh)&&location.reload(),(n!==null||i.redirect!==null&&i.redirect!==void 0)&&(window.location.href=n!=null?n:i.redirect),u!==null&&u.apply(null,arguments),w?i:(e&&$(e).find(".is-invalid").each(function(){$(this).removeClass("is-invalid")}),!0)},error:function(i,k,m){return a&&console.error(i),l&&(l!=="empty"?Notiflix.Block.remove(l):Notiflix.Loading.remove()),d!==null&&d.apply(null,i),i.status==422?($(e).find(".is-invalid").each(function(){$(this).removeClass("is-invalid")}),$.each(i.responseJSON.errors,function(y,C){r.failure(C[0]),a&&console.error(i),$(e).find(`[name=${y}]`).addClass("is-invalid")})):(i.status==500,r.failure(m)),!1},complete:i=>{l&&(l!=="empty"?Notiflix.Block.remove(l):Notiflix.Loading.remove()),c!==null&&c.apply(null,i)}})};window.validateRequired=e=>{let t=$(e).find("[required]"),s=!1,o=null;return t.each(function(){if($(this).val()==""||$(this).val()==null){if(console.log($(this)),$(this).hasClass("tagify"))return;s=!0,o==null&&(o=$(this)),$(this).addClass("is-invalid"),$(this).closest(".form-group").find(".dropdown-toggle").addClass("invalid-select"),$(this).closest(".form-group").find(".dashboard-profile-photo").addClass("invalid-uploader")}else $(this).removeClass("is-invalid"),$(this).closest(".form-group").find(".dropdown-toggle ").removeClass("invalid-select"),$(this).closest(".form-group").find(".dashboard-profile-photo").removeClass("invalid-uploader")}),s&&(o.focus(),$("html, body").animate({scrollTop:o.offset().top-100},200)),s};$(document).on("keyup change","form input,select,textarea",function(){!$(this).attr("required")||($(this).val()?$(this).is("input")?$(this).removeClass("is-invalid"):$(this).is("select")?$(this).closest(".form-group").find(".select2-selection").css("border","1px solid #ced4da"):$(this).is("textarea")&&$(this).removeClass("is-invalid"):$(this).is("input")?$(this).addClass("is-invalid"):$(this).is("select")?$(this).closest(".form-group").find(".select2-selection").css("border","1px solid red"):$(this).is("textarea")&&$(this).addClass("is-invalid"))});$(document).on("change","[data-like-toggle]",function(){const e=$(this).data("like-toggle"),t=$(this);$(this).prop("disabled",!0);const s=window.location.origin+"/like/job";rebound({url:s,method:"POST",processData:!0,block:!1,data:{id:e},successCallback:o=>{console.log(o)},completeCallback:o=>{$(t).prop("disabled",!1)}})});$(document).on("click","[data-view-onclick]",function(){const e=$(this).html();console.log(e),Notiflix.Report.info("Image",e,"Ok")});
