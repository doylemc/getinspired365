select * from INFORMATION_SCHEMA.TABLES order by TABLE_NAME

select * from vw_person

select * from tbl_item_user

select distinct(itemtype) from tbl_item_user

select * from tbl_item_user where itemtype = 'video'

select *
from tbl_item_system
where itemtype = 'video'

sp_helptext vw_person

select count(*) from tbl_reference_quotations
where author = 'albert einstein'

select *
from tbl_reference_quotations
where author = 'albert einstein'

select top 5 * from tbl_reference_quotations where datepart(month, birthdate) = 12

prc_item_sel_sitemap

select * from tbl_item_system where itemtype = 'video'
select * from tbl_item_user where itemtype = 'video'
select * from vw_item where itemtype = 'video'

select distinct heading from vw_item where itemtype = 'video'

alter proc prc_item_sel_hugo_videos
as
begin
set nocount ON
select *, case when pageurl <> '' then pageurl else dbo.createurlfromtext (heading) end as hugourl 
from vw_item 
where itemtype = 'video'
set nocount off
end
go

sp_helptext prc_item_sel_sitemap

