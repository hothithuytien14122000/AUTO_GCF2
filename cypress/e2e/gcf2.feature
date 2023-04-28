Feature: GCF2
    Scenario: SI Logn in
        Given User opens admin Gcf2
        When User enter email geneat.soft@gmail.com
        When User enter Password 123456
        When User click submit Login
    Scenario: SI Add Long form
        Given User opens admin Gcf2
        When User enter email geneat.soft@gmail.com
        When User enter Password 123456
        When User click submit Login
        When User click Long form
        When User click Add new
        # And User select Chuyên mục
        When User enter data file Tiêu đề, Tác giả, Giới thiệu, Nội dung
        When User switch tab English and data in fields Tiêu đề, Tác giả, Giới thiệu, Nội dung
        When User Add Ảnh thumbanil
        When  User Enter data in fields Background Color, Custom CSS Class, Custom CSS
        When User Click button Lưu lại