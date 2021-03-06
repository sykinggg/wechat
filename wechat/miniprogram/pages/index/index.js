"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        msg: 'hello',
        markers: [{
                iconPath: '/resources/others.png',
                id: 0,
                latitude: 23.099994,
                longitude: 113.324520,
                width: 50,
                height: 50
            }],
        polyline: [{
                points: [{
                        longitude: 113.3245211,
                        latitude: 23.10229
                    }, {
                        longitude: 113.324520,
                        latitude: 23.21229
                    }],
                color: '#FF0000DD',
                width: 2,
                dottedLine: true
            }],
        controls: [{
                id: 1,
                iconPath: '/resources/location.png',
                position: {
                    left: 0,
                    top: 300 - 50,
                    width: 50,
                    height: 50
                },
                clickable: true
            }]
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        var _this = this;
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            })
        });
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    clickMe: function () {
        if (this.data.msg === 'hello') {
            this.setData({
                msg: 'hello world'
            });
        }
        else {
            wx.navigateTo({
                url: '../text/text'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUE2QztBQUU3QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELEdBQUcsRUFBRSxPQUFPO1FBQ1osT0FBTyxFQUFFLENBQUM7Z0JBQ04sUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxNQUFNLEVBQUUsRUFBRTthQUNiLENBQUM7UUFDRixRQUFRLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsQ0FBQzt3QkFDTCxTQUFTLEVBQUUsV0FBVzt3QkFDdEIsUUFBUSxFQUFFLFFBQVE7cUJBQ3JCLEVBQUU7d0JBQ0MsU0FBUyxFQUFFLFVBQVU7d0JBQ3JCLFFBQVEsRUFBRSxRQUFRO3FCQUNyQixDQUFDO2dCQUNGLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsQ0FBQztnQkFDUixVQUFVLEVBQUUsSUFBSTthQUNuQixDQUFDO1FBQ0YsUUFBUSxFQUFFLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFO29CQUNOLElBQUksRUFBRSxDQUFDO29CQUNQLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDYixLQUFLLEVBQUUsRUFBRTtvQkFDVCxNQUFNLEVBQUUsRUFBRTtpQkFDYjtnQkFDRCxTQUFTLEVBQUUsSUFBSTthQUNsQixDQUFDO0tBQ0w7SUFFRCxXQUFXO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSxjQUFjO1NBQ3RCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxNQUFNO1FBQU4saUJBaUNDO1FBaENHLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7Z0JBQ3BELE9BQU8saUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ3BDLENBQUMsQ0FBQztTQUNMLENBQUMsQ0FBQTtRQUVGLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDVixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUE7U0FDTDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHMUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDNUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDVixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDcEIsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFBO1NBQ0o7YUFBTTtZQUVILEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDUixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNWLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ3BCLENBQUMsQ0FBQTtnQkFDTixDQUFDO2FBQ0osQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNWLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNWLEdBQUcsRUFBRSxhQUFhO2FBQ3JCLENBQUMsQ0FBQTtTQUNMO2FBQU07WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNWLEdBQUcsRUFBRSxjQUFjO2FBQ3RCLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgICBkYXRhOiB7XG4gICAgICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxuICAgICAgICB1c2VySW5mbzoge30sXG4gICAgICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICAgICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgICAgICBtc2c6ICdoZWxsbycsXG4gICAgICAgIG1hcmtlcnM6IFt7XG4gICAgICAgICAgICBpY29uUGF0aDogJy9yZXNvdXJjZXMvb3RoZXJzLnBuZycsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIGxhdGl0dWRlOiAyMy4wOTk5OTQsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXG4gICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICAgIH1dLFxuICAgICAgICBwb2x5bGluZTogW3tcbiAgICAgICAgICAgIHBvaW50czogW3tcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjExLFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAyMy4xMDIyOVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMTEzLjMyNDUyMCxcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogMjMuMjEyMjlcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY29sb3I6ICcjRkYwMDAwREQnLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBkb3R0ZWRMaW5lOiB0cnVlXG4gICAgICAgIH1dLFxuICAgICAgICBjb250cm9sczogW3tcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgaWNvblBhdGg6ICcvcmVzb3VyY2VzL2xvY2F0aW9uLnBuZycsXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAzMDAgLSA1MCxcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9XVxuICAgIH0sXG4gICAgLy/kuovku7blpITnkIblh73mlbBcbiAgICBiaW5kVmlld1RhcCgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgbG9nczogKHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW10pLm1hcCgobG9nOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcbiAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogcmVzLFxuICAgICAgICAgICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBjbGlja01lKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLm1zZyA9PT0gJ2hlbGxvJykge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgICAgbXNnOiAnaGVsbG8gd29ybGQnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vdGV4dC90ZXh0J1xuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICB9XG59KVxuIl19