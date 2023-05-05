Feature: GCF2
    Scenario: SI Logn in
        Given User opens admin Gcf2
        When User enter email geneat.soft@gmail.com
        When User enter Password 123456
        When User click submit Login
    Scenario: LF-01 Verify that Add New successfuly with enter data
        Given User opens admin Gcf2
        When User enter email geneat.soft@gmail.com
        When User enter Password 123456
        When User click submit Login
        When User Click the button Add new
        When User Select Category
        When User Enter data in fields Title Nông dân và Lớp học đồng ruộng
        When User Enter data in fields Author Nguyễn Thị Phương Dung
        When User Enter data in fields Introduce Chị Hầm là một trong số 1150 nông dân trong 9 xã tham gia Lớp học đồng ruộng (FFS) về chủ đề 
        When User Enter data in fields Content Trước giờ tôi không biết đất cũng có vị chua hay mặn và nó ảnh hưởng lớn tới cây trồng
        When User Switch the tab to English
        When User Enter English data in the fields Title Binh Thuan farmers and Farmer
        When User Enter English data in fields Author Nguyen Thi Phuong Dung
        When User Enter English data in fields Introduce Mrs. Ham is among the 1150 farmers from 9 communes taking part in the FFS on the topic of Land and Biomass Management
        When User Enter English data in fields Content Mrs. Ham is among the 1150 farmers from 9 communes taking part in the FFS on the topic of 
        When User Add thumbanil
        When User Enter data in fields Background Color #186a5e
        When User Enter data in fields Custom CSS Class text-white
        # When User Enter data in fields Custom CSS .Longform p { 
        # line-height: 3rem !important; 
        # font-weight: 900 !important;
        # font-style: italic !important; 
        # font-size: 1.5rem !important; 
        # text-align: justify !important; 
        # }
        And User Click the button Save
     Scenario: LF-02 Verify that  edit successfully
        Given User opens admin Gcf2
        When User enter email geneat.soft@gmail.com
        When User enter Password 123456
        When User click submit Login
        When User Click the button Edit
        When User edit Category
        When User edit Title Nông sản Việt Nam
        When User edit Author Nguyễn Thị Phương Dung
        When User edit Introduce Chị Hầm là một trong số 1150 nông dân trong 9 xã tham gia Lớp học đồng ruộng (FFS) về chủ đề 
        When User edit Content Trước giờ tôi không biết đất cũng có vị chua hay mặn và nó ảnh hưởng lớn tới cây trồng
        When User Switch the tab to English
         When User Enter English data in the fields Title Binh Thuan farmers and Farmer
        When User Enter English data in fields Author Nguyen Thi Phuong Dung
        When User Enter English data in fields Introduce Mrs. Ham is among the 1150 farmers from 9 communes taking part in the FFS on the topic of Land and Biomass Management
        When User Enter English data in fields Content Mrs. Ham is among the 1150 farmers from 9 communes taking part in the FFS on the topic of 
        When User Add thumbanil
        When User Enter data in fields Background Color #186a5e
        When User Enter data in fields Custom CSS Class text-white
        # When User Enter data in fields Custom CSS .Longform p { 
        # line-height: 3rem !important; 
        # font-weight: 900 !important;
        # font-style: italic !important; 
        # font-size: 1.5rem !important; 
        # text-align: justify !important; 
        # }
        And User Click the button Save
    