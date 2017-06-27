package jp.ac.std_it_college.ordersystem;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by s15008 on 17/06/27.
 */

@Controller
public class OrderController {
    // オーダーページリクエスト
    @RequestMapping("/order")
    public String order(Model model) {
        String[] itemsList = {"れたす", "きゅうり", "とまと", "ピーマン"};
        String[][] methodsList = {{"自根"}, {"自根", "接ぎ木"}, {"自根", "接ぎ木"}, {"自根", "接ぎ木"}};
        String[][] rootsList = {{"なし"}, {"C台木1", "C台木2"}, {"T台木1", "T台木2"}, {"P台木1", "P台木3", "P台木3"}};
        String[] traiesList = {"128穴","200穴"};
        model.addAttribute("items", itemsList);
        model.addAttribute("methods", methodsList);
        model.addAttribute("rootStocks", rootsList);
        model.addAttribute("tray", traiesList);

        return "order";
    }
}
